import os
from pypdf import PdfReader
path = 'C:\\inetpub\\AGP.Arch.erpx.Web.Home.server\\Attachments\\Aztrh'
files = [f for f in os.listdir(path) if f.endswith('.pdf')]
for f in sorted(files):
    full = os.path.join(path, f)
    r = PdfReader(open(full, 'rb'))
    print('===== FILE:', repr(f))
    print('PAGES:', len(r.pages))
    total_text = ''
    for i, p in enumerate(r.pages):
        t = p.extract_text() or ''
        total_text += t
    print('TOTAL CHARS:', len(total_text))
    print('FIRST 300 CHARS:', total_text[:300].encode('cp1256', errors='replace'))
    # Check similarity
