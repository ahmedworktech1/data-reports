import os, sys
for f in os.listdir('C:\\inetpub\\AGP.Arch.erpx.Web.Home.server\\Attachments\\Aztrh\\'):
    if f.endswith('.pdf'):
        print('FILE:', f)
        print('SIZE:', os.path.getsize(os.path.join('C:\\inetpub\\AGP.Arch.erpx.Web.Home.server\\Attachments\\Aztrh\\', f)))
