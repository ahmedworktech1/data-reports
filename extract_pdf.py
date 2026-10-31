import os
from pypdf import PdfReader
path = 'C:\\inetpub\\AGP.Arch.erpx.Web.Home.server\\Attachments\\Aztrh'
for f in sorted(os.listdir(path)):
    if f.endswith('.pdf'):
        full = os.path.join(path, f)
        r = PdfReader(open(full, 'rb'))
        print('===== FILE:', f)
        print('PAGES:', len(r.pages))
        for i, p in enumerate(r.pages):
            text = p.extract_text() or ''
            print('--- PAGE', i)
            print(text[:3000])
