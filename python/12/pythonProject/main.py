
import platform

print(platform.system(), platform.platform(), platform.machine())

# Verzija pythona na mom racunaru je: %VERZIJA -> platform.
python_version = platform.python_version()

print(f"Verzija pythona na mom racunaru je: {python_version}")

# Ako je verzija pythona koju koristimo veca ili manje od 3 (ako nije 3) onda ispisati poruku:
# Ne koristite dobru verziju pythona

version = int(python_version[0])

if version != 3:
    print("Ne koristite dobru verziju pythona")
else:
    print("Imate dobru verziju pythona")