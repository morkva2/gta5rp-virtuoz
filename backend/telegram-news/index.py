import json
import os
import urllib.request
import urllib.error

def handler(event: dict, context) -> dict:
    '''Получение последних постов из Telegram-канала'''
    
    method = event.get('httpMethod', 'GET')
    
    if method == 'OPTIONS':
        return {
            'statusCode': 200,
            'headers': {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'GET, OPTIONS',
                'Access-Control-Allow-Headers': 'Content-Type',
                'Access-Control-Max-Age': '86400'
            },
            'body': ''
        }
    
    if method != 'GET':
        return {
            'statusCode': 405,
            'headers': {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            },
            'body': json.dumps({'error': 'Method not allowed'})
        }
    
    bot_token = os.environ.get('TELEGRAM_BOT_TOKEN')
    if not bot_token:
        return {
            'statusCode': 500,
            'headers': {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            },
            'body': json.dumps({'error': 'TELEGRAM_BOT_TOKEN not configured'})
        }
    
    channel_username = '@Feruchio_Shop'
    limit = 10
    
    try:
        api_url = f'https://api.telegram.org/bot{bot_token}/getUpdates'
        
        req = urllib.request.Request(api_url)
        with urllib.request.urlopen(req, timeout=10) as response:
            data = json.loads(response.read().decode())
        
        if not data.get('ok'):
            return {
                'statusCode': 500,
                'headers': {
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Origin': '*'
                },
                'body': json.dumps({'error': 'Telegram API error', 'details': data})
            }
        
        posts = []
        for update in data.get('result', [])[:limit]:
            if 'channel_post' in update:
                post = update['channel_post']
                
                post_data = {
                    'message_id': post.get('message_id'),
                    'date': post.get('date'),
                    'text': post.get('text', post.get('caption', '')),
                    'photo': None
                }
                
                if 'photo' in post and post['photo']:
                    largest_photo = max(post['photo'], key=lambda p: p.get('file_size', 0))
                    file_id = largest_photo.get('file_id')
                    
                    file_req = urllib.request.Request(
                        f'https://api.telegram.org/bot{bot_token}/getFile?file_id={file_id}'
                    )
                    with urllib.request.urlopen(file_req, timeout=10) as file_response:
                        file_data = json.loads(file_response.read().decode())
                    
                    if file_data.get('ok'):
                        file_path = file_data['result']['file_path']
                        post_data['photo'] = f'https://api.telegram.org/file/bot{bot_token}/{file_path}'
                
                posts.append(post_data)
        
        posts.sort(key=lambda x: x['date'], reverse=True)
        
        return {
            'statusCode': 200,
            'headers': {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            },
            'body': json.dumps({
                'posts': posts[:limit],
                'channel': channel_username
            })
        }
    
    except urllib.error.HTTPError as e:
        error_body = e.read().decode() if e.fp else str(e)
        return {
            'statusCode': 500,
            'headers': {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            },
            'body': json.dumps({
                'error': 'HTTP error from Telegram API',
                'status': e.code,
                'details': error_body
            })
        }
    
    except Exception as e:
        return {
            'statusCode': 500,
            'headers': {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            },
            'body': json.dumps({'error': str(e)})
        }
