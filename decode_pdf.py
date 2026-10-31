import os
from pypdf import PdfReader
path = 'C:\\inetpub\\AGP.Arch.erpx.Web.Home.server\\Attachments\\Aztrh'
files = sorted([f for f in os.listdir(path) if f.endswith('.pdf')])
for f in files:
    full = os.path.join(path, f)
    r = PdfReader(open(full, 'rb'))
    print('===== FILE:', f)
    print('PAGES:', len(r.pages))
    text = ''.join(p.extract_text() or '' for p in r.pages)
    # Try decoding as cp1256
    try:
        decoded = text.encode('latin-1', errors='ignore').decode('cp1256', errors='ignore')
        print('DECODED FIRST 500:')
        print(decoded[:500])
    except Exception as e:
        print('DECODE ERROR:', e)
    # Check if identical to other
