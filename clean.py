import os, re, glob

html_files = glob.glob('*.html') + glob.glob('Projecten/*.html')
css_files = glob.glob('*.css')
js_files = glob.glob('js/*.js')

for f in html_files:
    try:
        with open(f, 'r', encoding='utf-8') as file:
            content = file.read()
        content = re.sub(r'<!--(.*?)-->', r'', content, flags=re.DOTALL)
        with open(f, 'w', encoding='utf-8') as file:
            file.write(content)
    except:
        pass

for f in css_files:
    try:
        with open(f, 'r', encoding='utf-8') as file:
            content = file.read()
        content = re.sub(r'/\*(.*?)\*/', r'', content, flags=re.DOTALL)
        with open(f, 'w', encoding='utf-8') as file:
            file.write(content)
    except:
        pass

for f in js_files:
    try:
        with open(f, 'r', encoding='utf-8') as file:
            content = file.read()
        content = re.sub(r'/\*(.*?)\*/', r'', content, flags=re.DOTALL)
        # remove single line comments except inside URLs
        content = re.sub(r'(?<![:/])//.*', r'', content)
        with open(f, 'w', encoding='utf-8') as file:
            file.write(content)
    except:
        pass
