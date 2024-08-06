#!/bin/bash

# Turn off Wi-Fi
networksetup -setairportpower en0 off

# Turn off Ethernet
networksetup -setnetworkserviceenabled "Ethernet" off

# Wait for 10 seconds
sleep 10

# Clear DNS cache
sudo killall -HUP mDNSResponder

# Renew DHCP lease
sudo ipconfig set en0 DHCP

# Turn on Ethernet
networksetup -setnetworkserviceenabled "Ethernet" on

# Turn on Wi-Fi
networksetup -setairportpower en0 on

# Restart the network
sudo launchctl stop com.apple.networkd
sudo launchctl start com.apple.networkd