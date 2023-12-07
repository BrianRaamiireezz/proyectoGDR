from scapy.all import sniff
from plyer import notification

def packet_callback(packet):
    if packet.haslayer('IP') and packet.haslayer('TCP'):
        src_ip = packet['IP'].src
        dst_ip = packet['IP'].dst
        src_port = packet['TCP'].sport
        dst_port = packet['TCP'].dport

        print(f"Packet from {src_ip}:{src_port} to {dst_ip}:{dst_port}")

        # Puedes personalizar las condiciones para generar alertas
        if dst_port == 80:  # Ejemplo: alerta cuando se detecta tráfico en el puerto 80
            alert_message = f"Alerta: Tráfico detectado en el puerto 80 desde {src_ip} a {dst_ip}"
            notification.notify(
                title='Alerta de Tráfico',
                message=alert_message,
                app_name='Tráfico GNS3',
            )

# Configura el puerto que deseas monitorear
puerto_monitorizado = 80  # Puedes cambiarlo al puerto que desees

# Filtra paquetes en el puerto especificado
sniff(prn=packet_callback, filter=f"port {puerto_monitorizado}", store=0)
