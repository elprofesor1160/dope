function FindProxyForURL(url, host) {
    if (dnsDomainIs(host, ".i2p")) { return "HTTP localhost:4444"; }
    if (dnsDomainIs(host, ".onion")) { return "SOCKS localhost:9050"; }
}
