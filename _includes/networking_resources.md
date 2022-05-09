# BCL/Networking team - What to expect?

In the past people asked me which parts of networking are useful to know:
- How deep one has to go to apply for [BCL/Networking job](/hiring_prague_net)?
- What will the work be about?



## Networking team

Our team has currently 7 developers (6 located in Prague, Czech Republic and 1 located in Redmond, USA).
Our architect is located on Boston area, USA.
Manager of the team ([ziki_cz](https://twitter.com/ziki_cz)) is based in Brno, Czech Republic.

We own .NET **client-side** networking stack (HttpClient - HTTP 1.1/2/3) and **low-level** networking primitives (Sockets, SSL/TLS support, QUIC protocol, Uri, WebSockets, etc.) in [dotnet/runtime repo](https://github.com/dotnet/runtime) -- see [namespaces System.Net, System.Net.Http, System.Net.Quic, System.Net.Security and System.Net.Sockets](https://issuesof.net/?q=is%3Aopen%20repo%3Adotnet%2Fruntime%20area-lead%3Akarelz%20group%3Aarea%20sort%3Acreated-desc).
We work closely with server-side .NET networking team ASP.NET/Kestrel.
We also collaborate with ASP.NET/Kestrel team on reverse-proxy [YARP](https://github.com/microsoft/reverse-proxy).

Our top focus in last year was / is:
- HTTP/3 and QUIC support (based on [msquic](http://github.com/microsoft/msquic) OSS library)
- LLHTTP prototype - exploring option to create new Low-Level HTTP APIs
- YARP
- Customer imapctful issues - addressing customer pain in perf, functionality, extensibility, etc.

Here are our Networking team members:
- Anton Firszov - GitHub: [@antonfirsov](https://github.com/antonfirsov), Twitter: [@antonfrv](https://twitter.com/antonfrv)
- Katya Sokolova - GitHub: [@greenEkatherine](https://github.com/greenEkatherine)
- Mana - GitHub: [@ManickaP](https://github.com/ManickaP), Twitter: [@ManaPichova](https://twitter.com/ManaPichova)
- Miha Zupan - GitHub: [@MihaZupan](https://github.com/MihaZupan), Twitter: [@_MihaZupan](https://twitter.com/_MihaZupan)
- Natalia Kondratyeva - GitHub: [@CarnaViire](https://github.com/CarnaViire), Twitter: [@carna_viire](https://twitter.com/carna_viire)
- Radek Zikmund - GitHub: [@rzikm](https://github.com/rzikm), Twitter: [@Radek_Zikmund](https://twitter.com/Radek_Zikmund)
- Tomas Weinfurt - GitHub [@wfurt](https://github.com/wfurt)



### How to apply

Reach out directly to team manager [@ziki_cz](https://twitter.com/ziki_cz) (Twitter DM is prefered, or use [email](mailto:karelz@microsoft.com), or [LinkedIn](https://www.linkedin.com/in/karelzikmund)).
- Start discussion with answers to these 2 questions (to see if it makes sense to apply to the job post)
    1. What is your related library-level, system-level or networking-related experience from work or hobby projects?
    2. Describe some interesting technical challenge (ideally related to the job). An investigation, bug fix or feature, etc. Something you are proud of.
- Details:
    - Library-level = producing libraries used by multiple projects, ideally by multiple companies.
    - System-level = anything low-level, close to OS APIs, drivers, HW interaction, or some non-trivial backend (e.g. difficult multi-threading, scale).
    - Networking = libraries / APIs / protocols operating on network to communicate between computers. Server-side, or client-sie, or both.



## Networking - Direction and history of the space

Some useful background and direction of Networking space can be found also on slides from my older talk **.NET Core Networking stack and Performance** (at .NET Core Summer event in Brno, CZ on 2019/7/9) - the talk was in Czech, but the slides are in English, so useful to everyone: [slides](https://www.slideshare.net/KarelZikmund1/net-core-summer-event-2019-in-brno-cz-net-core-networking-stack-and-performance-karel-zikmund).

If you want to hear story about the evolution of the Networking stack, check out older version of the talk in English: **.NET Core Networking stack and Performance** (at DotNext Moscow on 2017/11) - [video](https://www.youtube.com/watch?v=M3FZZhnRvQY&list=PLtWrKx3nUGBfYHhmiGih2lanzmRigE9cc&index=24&t=0s) (55 min) and [slides](https://www.slideshare.net/KarelZikmund1/dotnext-2017-in-moscow-net-core-networking-stack-and-performance-karel-zikmund).
Note that plans and perf results are old and obsolete in this talk, but the history didn't change :).



## Networking - Resources I found useful

I decided to publish my studying notes from 2018/2, i.e. from the time I became manager of all .NET Networking space (incl. .NET Core on Windows and .NET Framework servicing) and therefore I had to start understanding the space more.

The notes are **NOT must-read for interviews**!
You will NOT be asked these questions at interview (or at least the knolwedge will NOT be expected to be known prior to starting on the job).
Even if you demonstrate knowledge at interview of this background, it will NOT be the decision making point if you get the job or not.
The notes are more for demonstrating **what kind of knowledge you will be expected to gain in first 6-12 months on the job as dev on BCL/Networking team**.

The resources are sorted by order of usefulness - the 3rd book is already very niche and you can skip it.
However, some basic info from entries #4 and #5 can give you idea about our latest investments into QUIC, and HTTP/3.



### 1. Book: HTTP: The Definitive Guide

https://www.safaribooksonline.com/library/view/http-the-definitive/1565925092/
- by Brian Totty; Anshu Aggarwal; Sailu Reddy; David Gourley; Marjorie Sayer
- 2002 O'Reilly Media, Inc.

Overview:
- Layers:
    - HTTP (application layer)
    - TCP (transport layer) - error-free, in-order, unsegmented (any size, any time)
    - IP (network layer)
- Versions:
    - HTTP/0.9 - 1991 prototype - just GET, no MIME, headers, version number
    - HTTP/1.0
    - HTTP/1.0+ - Keep-alive extension, proxy-connection
    - HTTP/1.1 - persistent connections, pipelining, …
    - HTTP/2 (2.0) - compressed headers, multiplexing
URLs:
- URI (universal resource identifier) = URL (universal resource locator) or URN (universal resource name) (experimental/theoretical)
- Prior existence: FTP with login/password, location of resource, download (binary mode)
- `<scheme>://<user>:<password>@<host>:<port>/<path>;<params>?<query>#<frag>`
    - `<params>` can be on each path segment
- Absolute and Relative URLs (relative to base URL)
- Character-set: US-ASCII (7 bits)
- Escape: % with 2 hex-digits
- Reserved: % / # ? ; 
    - . .. (path component)
    - $ , + (reserved)
    - { } | \ & ~ [ ] ` (restricted, because unsafe handling by various transport agents)
    - < > " (unsafe, should be encoded)
    - @ & = (reserved, because special meaning in some schemes)
    - 0x00-0x1F, 0x7F (restricted as non-printable)
    - 0x7F+ (not within 7-bit US-ASCII range)
- Schemes:
    - http - `://<host>:<port>/<path>?<query>#<frag>` (default port 80)
    - https - `://<host>:<port>/<path>?<query>#<frag>` (default port 443)
    - mailto - `:<RFC-822-addr-spec>`
    - ftp - `://<user>:<password>@<host>:<port>/<path>;<params>`
    - file - `://<host>/<path>`
    - rtsp, rtspu - Real Time Streaming Protocol (UDP)
    - news, telnet
HTTP Messages:
Messages:
1. Start line
    - Request message: `<method> <request-URL> <version>` … e.g.: TRACE /a.txt HTTP/1.1
    - Response message: `<version> <status> <reason-phrase>` … e.g.: HTTP/1.1 200 OK
2. Headers - name: value (optional whitespace after ':'), new line (CRLF / LF by bad clients) at the end
    - Historically final CRLF might be missed if empty body
3. Body

Headers:
- General (both req/resp), Request, Response
- Entity headers (body size and contents of the resource)
- Extension headers
- Multi-line (header continuation line): line starts with space or tab (at least 1)
Methods:
- Safe: GET, HEAD - nothing will happen on the server as result
- HEAD - sends just headers, no body
    - Usage: find out about resource (e.g. type) / see if it exists / test if it was modified
- POST - send input data to server (HTML forms)
- TRACE - loopback, through intermediates (proxies) - inject "Via: `<name>`" header
    - Not specific per method
    - Note: Discovered vulnerability (access to request headers, incl. authentication, etc.)
- OPTIONS - server responds with header "Allow: GET, POST, PUT, OPTIONS"
- GET, PUT (store), DELETE
- Extension: LOCK, MKCOL (create resource), COPY (on server), MOVE (on server)
Status codes:
- 100-199 / 100-101 - Informational
    - 100 - Continue
        - Used to check server will accept (large) entity - it's optimization
        - Server reaction to header "Expect: 100-continue"
        - Note: Some servers send the code inappropriately
        - Server can skip 100 if it got partial / all entity
    - 101 - Switching protocols - reaction to Upgrade header
- 200-299 / 200-206 - Successful
    - 200 - OK
    - 201 - Created - e.g. reaction to PUT (body should be the created URLs, Location header the most specific one)
- 300-399 / 300-305 - Redirection
- 400-499 / 400-415 - Client error
    - 400 - Bad request
    - 401 - Unauthorized
    - 402 - Payment required … currently not used
    - 403 - Forbidden … usually when the server does not want to reveal reason for refusal
    - 404 - Not Found
    - 405 - Method not allowed
    - 407 - Proxy authentication required
- 500-599 / 500-505 - Server error
Connections Management
TCP
- Reliable data pipes
    - IP header (20B) - src/dest IP, size, etc.
    - TCP header (20B) - src/dest port, flags, data ordering & integrity checking
    - chunk of TCP data
    TCP Performance problems:
    - TCP connection setup handshake (TCP 3-way handshake) … SYN -> SYN+ACK -> ACK+data
        - Small HTTP transactions - 50% in TCP setup
    - TCP's delayed acknowledgement … acknowledgement in outgoing packets - 100-200ms waiting on new packet to piggyback on
    - TCP slow-start congestion control
        - Congestion window (unconfirmed packets) - 4-10, each max size 1,460 B (2MB - 9 round-trips with start congestion window 4)
    - Nagle's algorithm (data aggregation) and TCP_NODELAY … buffering outgoing data (don't send non-full-size packets until all acknowledged)
        - Combo with delayed acknowledgement (100-200ms)
    - TIME_WAIT delay + port exhaustion
        - 2MSL (Maximum Segment Lifetime) = 2 min … prevents reusing same address+port (TCP data corruption from previous connection)
Connection header
- 3 types of tokens:
    - Other header field names relevant only to this connection
    - Value close, or any arbitrary non-standard value
- Delete all before forwarding the message to next hop
- Additional (not explicitly listed) hop-by-hop headers: Proxy-Authenticate, Proxy-Connection, Transfer-Encoding, and Upgrade
TCP Performance solutions:
- Parallel connections
- Persistent connections
    - HTTP/1.0+ Keep-Alive
        - Deprecated in HTTP/1.1 (replaced)
        - Client request & server response: "Connection: Keep-Alive"
        - Can be closed at any time by either side
        - Not default, but opt-in
        - Response tuning: "Keep-Alive: max=5, timeout=120"
            - timeout - how long server will keep it (likely, no guarantee)
            - max - how many more transactions (likely, no guarantee)
        - Dumb proxies which forward it, but don't understand can hang the connection
    - HTTP/1.0+ Proxy-Connection hack
        - Smart proxies turn it into Connection header
        - Solves 1 dumb proxy problem, not more dumb proxies though
    - HTTP1/1 Persistent connections
        - Active by default
        - Ended by header "Connection: close" (server or client)
        - Can be closed at any time by either side
        - All messages correct with length (header Content-Length or "Transfer-Encoding: chunked")
        - Clients should retry upon close (if there is not side-effect)
        - Client should maintain at most 2 persistent connections
- Pipelined connections
    - Send multiple requests before you get responses
    - Only on persistent connections
    - Responses must be in the same order as requests (there is not another ID/sequence number to use)
    - Expect close at any time, be ready to redo unfinished requests
    - Do not pipeline requests with side-effects (e.g. POST)
- Connection management
    - Black art
    - "At will" disconnection
        - Can happen due to error at any time (e.g. in the middle of headers)
        - Common with pipelined persistent connections
    - Content-Length should be accurate, but older servers didn't use it or set incorrectly and relied on connection close
    - Graceful close
        - Full vs. half closes - for pipelining, etc. use half-close on output
            - Closing input risks TCP "connection reset by peer" - treated as serious and wipes buffered unprocessed data

Client identification and Cookies - https://www.safaribooksonline.com/library/view/http-the-definitive/1565925092/ch11.html
- Note: I never even read the chapter as it is fairly specialized

Secure HTTP - https://www.safaribooksonline.com/library/view/http-the-definitive/1565925092/ch14.html
- Note: I never even read the chapter as it is fairly specialized

Entities and Encoding - https://www.safaribooksonline.com/library/view/http-the-definitive/1565925092/ch15.html
- Note: I never even read the chapter as it is fairly specialized

Later:
- Transfer-Encoding
    - Chunked encoding
        - Request header "TE: trailers, chunked" (basically should be named Accept-Transfer-Encoding)
        - Can be used also by client (be ready for 411 Length Required response)
        - "Transfer-Encoding: chunked" - followed by stream of chunks
            - Each chunk: length in hex + CRLF + data (of the size)
            - End with - 0-length chunk (end of body)
            - Can be combined with Content-Encoding (e.g. gzip)
    - Trailers (trailing headers)
        - Trailer header lists headers sent in trailers section (each line ended with CRLF)
        - If supported by client via TE header, or if the trailers content is optional (safe to discard)
        - These can't be in trailers: Transfer-Encoding, Trailer, Content-Length
    - Rules:
        - "chunked" has to be always there (unless connection was closed)
        - If "chunked" is used, it has to be the last transfer encoding applied to the message body
        - "chunked" cannot be applied more than once



### 2. Book: Learning HTTP/2

https://www.safaribooksonline.com/library/view/learning-http2/9781491962435/
- by Javier Garza; Stephen Ludin
- 2017 O'Reilly Media, Inc.

Note: Useful, because in .NET Core 3.0 we started implementing HTTP/2 for gRPC.
We expect in .NET 5 to finish it off with nearly-full support.

Foreword
- HTTP-NG (NextGen) failed
- 1989 - HTTP - in CERN (Hypertext + Hypermedia)
- HTTP/0.9
    - 0.9 - just GET, only for HTML (text, no images)
    - 1995 - 18K HTTP servers on port 80, protocol had evolved past 0.9
- HTTP/1.0
    - 1996 - codified into RFC 1945 (1 page -> 60 pages)
    - Brings: Headers, response codes, redirects, errors, conditional requests, content encoding (compression), more request methods
    - Problems:
        - Unable to keep connections open
        - No mandatory Host header
        - Bare bones caching options
- HTTP/1.1
    - Over 20 years now
    - Brings:
        - Host header mandatory - enables virtual hosting
        - Persistent connections
        - Extension of caching headers, OPTIONS method, Upgrade header, range request, compression with transfer-encoding, pipelining
        - Problems:
            - Pipelining keeps order -> head of line blocking (longer request blocks the others)
- SPDY
    - 2009 Google
    - Brings: Multiplexing, framing, header compression
- HTTP/2
    - 2012/10 - HTTP working group re-charted to publish HTTP/2, using SPDY
    - RFC 7540 in 2015/5
Quick Start
- Get a certificate - online generator / self-sign tools (openssl), Let's Encrypt (2015 fall, certbot)
Hacking the Web
- Performance:
    - Latency/Round-Trip Time (RTT)
    - Bandwidth
    - DNS lookup
    - Connection setup (TCP 3-way handshake)
    - TLS negotiate time
- Problems of HTTP/1.1
    - Head of line blocking - pipelining in order of requests
    - TCP congestion window (TCP slow start) - 4-10 packets start (1,460 B data in each). 2MB needs 9 round-trips
    - 6 connections by browsers (typically)
    - Fat message headers (KBs - esp. cookies) - 460 B per request x 140 web page objects = 63KB … + upload bandwidth (mobile)
    - Stadium effect (mobile bandwidth)
    - No priorities of requests - leads to serialization by browser
    - 3rd party objects (no solution in HTTP/2)
- Workarounds:
    - Optimize DNS lookups - limit # of unique domains, choose based on resolution latencies, prefetch: `<link rel="dns-prefetch" href="//ajax.googleapis.com">`
    - Optimize TCP connections - CDN (Content Delivery Network), preconnect: `<link rel="preconnect" href="//fonts.example.com" crossorigin>`
    - Avoid redirects
    - Cache on client (Time to Live = TTL)
    - Cache at the edge
    - Conditional caching
    - Compression & minification (HTML 50%)
    - Avoid blocking CSS/JS - `<script async src=”/js/myfile.js”>`
    - Optimize images
- Anti-patterns for HTTP/2
    - Spriting and resource consolidation/inlining
        - Spriting = small images consolidated
        - CSS & JS merged
    - Sharding (multiple hostnames)
        - Hard to remove - share common certificate
    - Cookie-less domains (avoid cost of uncompressed cookie headers)
Transition to HTTP/2
- HTTPS connection (port 443) has significantly lower error rate than Upgrade (WebSockets and SPDY lessons)
HTTP/2 Protocol
- RFC 7540 for implementors
- Framing layer & data/http layer
    - Binary protocol, header compression, multiplexed, encrypted
- Protocol discovery:
    - Upgrade for non-encrypted
    - ALPN (Application-Layer Protocol Negotiation) when over TLS (no additional round-trips)
    - HTTP Alternative Services - Alt-Svc
    - Protocol start:
        - Magic octet stream "`PRI - HTTP/2.0\r\n\r\nSM\r\n\r\n`" (to break HTTP/1.x communications) … to double-check HTTP/2 protocol
        - SETTINGS frame (client can start sending more frames) - server sends its SETTINGS frame - then ACK
- Frame (9B fixed)
    - Length (3B) - 2^14 is default max size (longer has to be requested in SETTINGS frame)
    - Type (1B), Reserved (1 bit), Stream identifier (31 bits = ~4B)
        - Types: DATA, HEADERS, PRIORITY (set/change), RST_STREAM (end stream - error case), SETTINGS (connection-level parameters), PUSH_PROMISE,
            - PING (test connectivity and measure RTT), GOAWAY (peer is done accepting new streams), WINDOW_UPDATE, CONTINUATION (of HEADERS)
- Streams:
    - New stream (= request/response) - HEADERS frame + optional CONTINUATION frames (must be the next thing to send)
        - Stream identifier for next one is incremented by 2 (start at 1 for client, start at 2 for server) (0 is reserved for connection-level control messages)
        - END_HEADERS flag in HEADERS/CONTINUATION frame ends headers
    - Differences vs. HTTP/1.x
        - Status line broken into pseudo headers :sheme, :method, :path, :status
        - No chunked encoding
        - No more 101 responses (Upgrading to WebSocket) - ALPN is more explicit (with less round-trips)
    - Flow control: WINDOW_UPDATE - sets/updates window size (how many bytes is sender willing to receive) - window defaults to 64KB, max is 2^31 (2GB)
        - Useful for proxy/CDN to even out flow on both sides
    - Priority (HEADERS and PRIORITY): Dependencies, weights
    - Server push - send data proactively (PUSH_PROMISE) - with ID of associated request, with headers as the hypothetical request, :method has to be safe (e.g. GET), with Stream Identifier the response will be sent on, ideally before DATA is sent
        - Client can reset the new stream (RST_STREAM) (e.g. if it's already cached), or send PROTOCOL_ERROR (in GOAWAY frame) (for protocol-level errors - e.g. unsafe method, or violation of SETTINGS)
- Header Compression (HPACK) - RFC 7541
    - Avoids CRIME attack on SPDY (attacking deflate / gzip to decompress secrets)
    - Based on request headers unique bytes (they are similar) - each header is assigned an index, then sending indexes (61 are static combos, then dynamic)
        - Literal value allowed (for one-offs)
        - Option to index name, not value (for sensitive headers)
        - Integer compression with packing scheme
        - Huffman coding table
    - Requires maintaining connection state
- On the wire
    - :authority instead of h1's Host - similar to URI (can include port, but username, password are prohibited)
    - Example of communication (missing pieces)
HTTP/2 Performance
- Latency
    - 2/3 speed of light in optical fiber = SF-London = 43ms lowest possible latency (change distance - closer servers/CDNs)
    - "More bandwidth doesn't matter (much)" - web page download time decreases around 5Mbps and flattens at 8Mbps
        - Page Load Time (PLT) - goes down exponentially with latency (20ms -> 7%-15% reduction in PLT)
    - h2 has smaller initial congestion windows vs. h1 with 6 parallel connections, also more sensitive to packet loss - small number of larger objects shows that
    - h2 better than h1 on larger number of small objects (h1 can do just 6 parallel) - head of line blocking
What is next?
- TCP or UDP?
- Needs TCP reimplementation / improvements - it is in kernel
- -> Kernel mode vs. User mode (control / flexibility)
- QUIC
    - Out of order packet processing
    - Flexible congestion control
    - Low connection establishment overhead (0-RTT connection establishment) vs. 3 today for TCP & TLS
    - Authentication of transport details - limit TCP packet injection
    - Connection migration - mobile world with moving Ips
- TLS 1.3 (draft on 2017/3)
    - 1-RTT for new connections (down from 3-RTT)
    - 0-RTT for resumed connections
Data frames
- DATA 
    - Frame:
        - Padding length (1B) - only if PADDED flag is set
        - Data
        - Padding of Padding length (set to zeros)
    - Motivation for padding: Security
    - Flags: END_STREAM, PADDED
- HEADERS
    - Frame
        - Padding length (1B) - only if PADDED flag is set
        - E(xclusive) (1 bit) - only if PRIORITY flag is set
        - Stream Dependency (31 bits = ~4B) - only if PRIORITY flag is set
        - Weight (1B) - only if PRIORITY flag is set
        - Header block fragment
        - Padding of Padding length (set to zeros)
    - Flags:
        - END_STREAM, PADDED
        - END_HEADERS - indicates last HEADERS frame in the stream, if not set, CONTINUATION frame follows next
        - PRIORITY - indicates if E(xclusive), Stream Dependency and Weight are present
- PRIORITY - can be sent multiple times
    - Frame:
        - E(xclusive) (1 bit) - only if PRIORITY flag is set
        - Stream Dependency (31 bits = ~4B) - only if PRIORITY flag is set
        - Weight (1B) - only if PRIORITY flag is set
    - Flags: None frame-specific flags
- RST_STREAM - terminate stream immediately, usually response to error condition
    - Frame:
        - Error code (4B) - see list in RFC 7540 (section 7)
- SETTINGS
    - Sequence of key/value pairs (defined by frame length, divided by 6B)
    - Frame:
        - Sequence of:
            - Identifier (2B)
            - Value (4B)
            - Parameters:
                - SETTINGS_HEADER_TABLE_SIZE - 4K - Maximum size of the header table used for HPACK
                - SETTINGS_ENABLE_PUSH - 1 - If set to 0, peer can't sent PUSH_PROMISE frame
                - SETTINGS_MAX_CONCURRENT_STREAMS - default: no limit - Maximum number of streams the sender will allow
                - SETTINGS_INITIAL_WINDOW_SIZE - ~64KB (-3) - Initial window size for flow control
                - SETTINGS_MAX_FRAME_SIZE - 16KB - Maximum frame size the sender is willing to receive (<= 2^24-1)
                - SETTINGS_MAX_HEADER_LIST_SIZE - default: no limit - Maximum size of header the sender is willing to accept
    - When received, it must send SETTINGS with ACK flag set
- PUSH_PROMISE
    - Frame:
        - Padding length (1B) - only if PADDED flag is set
        - R(eserved) (1 bit) - should be 0
        - Promised stream ID (31 bits = ~4B) - always even (coming from server)
        - Header block fragment
        - Padding of Padding length (set to zeros)
    - Flags:
        - PADDED
        - END_HEADERS - indicates last HEADERS frame in the stream, if not set, CONTINUATION frame follows next
- PING
    - Connection-level (stream ID = 0)
    - Frame:
        - Opaque data (8B)
    - When received without ACK flag, send it back with ACK and same opaque data
- GOAWAY
    - Graceful connection shutdown, connection-level (stream ID = 0)
    - Frame:
        - R(eserved) (1 bit)
        - Last stream ID (31 bits = ~4B) - if error, set to highest processed stream ID, if NO_ERROR, set to max (2^31-1)
        - Error code (4B) - see list in RFC 7540 (section 7), 0=NO_ERROR
        - Additional debug data (4B)
- WINDOW_UPDATE
    - Can apply to all streams on connection (stream ID = 0)
    - Frame:
        - R(eserved) (1 bit)
        - Window Size Increment (31 bits = ~4B) - number of bytes to increase the current window by
- CONTINUATION
    - Frame:
        - Header Block Fragment
    - Flags:
        - END_HEADERS - indicates last HEADERS frame in the stream, if not set, CONTINUATION frame follows next



### 3. Book: TCP/IP Illustrated, Volume 1: The Protocols

https://www.safaribooksonline.com/library/view/tcpip-illustrated-volume/9780132808200/
- by W. Richard Stevens; Kevin R. Fall
- 2011 Addison-Wesley Professional

Note: This book goes way too deep. I enjoyed couple of chapters, but I don't think it is useful to learn more than is in my notes. I didn't finish reading the other boring parts of the book.

Preface
- Mobility affects routing and addressing structure - hosts don't have address based on nearby router
- Wireless has data outages (not due to too much traffic)
Introduction
- … TODO …
- Spoofing - forging source IP address
The Internet Address Architecture
- IPv4 - 32-bits
- IPv6 - 128-bits (RFC 4291)
    - 8 hexadecimal numbers = blocks/fields
        - `5f05:2000:80ad:5800:0058:0800:2023:1d71`
    - Leading 0s can be omitted
    - Blocks of 0s can be omitted `(::.)` - can be used only once (to avoid ambiguity)
        - `::1 = 0:0:0:0:0:0:0:1`
        - `2001::1 = 2001:0:0:0:0:0:0:1`
    - Embedded IPv4 addresses - hybrid notation `::ffff:10.0.0.1` = IPV4 `10.0.0.1` (IPv4-mapped IPv6 address)
    - IPv4-compatible IPv6 addresses: `::0102:f001 = ::1.2.240.1` (not the same as IPv4-mapped addresses - just similar notation / usage)
    - IPv6 can be in `[]` brackets `[::1]` (e.g. to avoid confusion with port in URL
    - RFC 5952 - remove confusion:
        - Leading 0s have to be omitted 0800 -> 800
        - `::` has to be used to its maximum effect (first one wins if there's a tie)
        - `::` cannot be used for 16-bit
        - Hex-digits a-f should be lower-case
ARP = Address Resolution Protocol (for IPv4)
- IPv6 uses Neighbor Discovery Protocol (part of ICMPv6)
IP = Internet Protocol
- IP datagrams - for all TCP, UDP, ICMP, IGMP
- Best-effort (no guarantee) - reliability on upper level
    - Simple error-handling on routers/etc. - e.g. throw away some data
- Connection-less = each datagram treated independently -> different paths may lead to out of order
    - Duplication can happen
    - Data altered (due to error)
- IPv4 datagram - 20B - total length, headers checksum, TTL (used as hop limit), src/dest IP address
    - Total size up to ~64KB
- IPv6 datagram - 40B - payload length, hop limit, src/dest IP address (no headers checksum)
- Big endian (end with big bits) = network byte order (vs. little endian on PCs)
ICMP = Internet Control Message Protocol - ICMPv4, ICMPv6
- Diagnostics and control information (IP lacks it)
- Often considered part of IP
- Use in large number of hacker attacks
- Often blocked at firewall -> no ping, traceroute
- Does not provide reliability for IP
- ICMP header  4B
- Enabled by:
    - IPv4 - Protocol = 1
    - IPv6 - Last extension header Next Header = 58
UDP (User Datagram Protocol)
- Preserves message boundaries (vs. stream-like TCP)
- Does NOT provide: error correction, sequencing, duplicate elimination, flow control or congestion control
- Can provide error detection and end-to-end checksum
- RFC 0768 (no significant revisions for 30 years)
- Frame:
    - Enabled by:
        - IPv4 Protocol = 17
        - IPv6 - Last extension header Next Header = 17
    - UDP Header (8B)
        - Source port number (2B) - optional, may be set to 0 if not reply required
        - Destination port number (2B)
        - Length (2B) - of UDP Header and UDP data
        - Checksum (2B) - covers UDP header, UDP data and pseudo-header
        - Data (variable Length)
- Details:
    - IP demultiplexes based on Protocol (IPv4) / Next Header (IPv6) - therefore ports of UDP, TCL, SCTP do not overlap
    - Length is duplicate with IPv4 (datagram's total length) and IPv6 (payload content)
    - Checksum is computed at sender and checked at final destination
        - IP checksum (of IP headers only) is recomputed at each hop (TTL updated)
        - Optional in IPv4 (although strongly suggested)
        - Mandatory in IPv6 (as there is no checksum on IP level)
    - Pseudo-header = src/dest address + Protocol/Next Header field from IP level (only for checksum purposes, never transmitted)
        - 12B for IPv4 / 40B for IPv6 (zero padding 1B/3B for Protocol/Next Header field)
    - UDP/IPv4 going through NAT modifies the packet and needs new checksum
- UDP-Lite - partial checksums for application-driven part (may skip error-resilient data like media streaming)
- Toredo  tunneling - IPv6 over UDP/IPv4 (address 2001::/32
- IP Fragmentation
    - IPv4 - any intermediate node can fragment packet - reassembly happens at destination (each part can take different route)
    - IPv6 - only source is allowed to fragment
- Using multiple servers per port - SO_REUSEADDR (which one is served is implementation specific)
- Lack of flow control & congestion control - destination UDP buffer may overflow and throw away packets, on intermediate nodes it causes congestion
- Fraggle attack = magnification attack - forge source IP, send packet to a victim which then broadcasts (to forged source IP)
DNS (Domain Name System)
- Fully Qualified Domain Names (FQDNs) - trailing dot (.)
    - Unqualified domain name - will have something appended
- Domain name = sequence of labels (63 chars each), 255 chars altogether top
- Hierarchical
- Caching (also on client) - Linux has Name Service Caching Daemon (NSCD) - which is optional
- DNS port is 53
- UDP/IPv4 messages limited to 512B
- CNAME = Canonical Name … alias for a single domain (for easier switching)
- Reverse DNS queries - PTR (pointer) records … `1.2.3.4.in-addr.arpa` / `1.2.3.4.5.6.7.8.10.11.12.13.14.15.16.ipv6.arpa`)
- Attacks
    - DoS - forged source IP - magnifying (20x larger response)
    - Fake DNS server - DNS-0x20 (nonce in 0x20 bit of each character of Query Name part) - repeated back TODO
TCP = Transmission Control Protocol
- ARQ = Automatic Repeat Request
- ACK = acknowledgement
    - How long to wait for ACK?
    - What if ACK is lost? -- same as if original packet is lost
    - What if received packet had errors? -- don't send ACK, wait for sender to resend
- Sequence number - to detect duplicates (and discard them)
- "stop and wait" protocol - send and wait for ACK
- Windows of packets and sliding window
- Flow control - rate-based or window-based (change windows size = window advertisement/update from sender)
    - Practically in same packets as ACK
- About TCP:
    - Connection-oriented - i.e. first establish connection
    - Byte stream - receiver can't distinguish different writes by sender
    - No interpretation of the data (except urgent mechanism - which is not recommended anymore)
    - Packetization - sequence number - offset of first packet byte in the stream (allows repacketization)
    - Segment = chunked passed by TCP to IP
- TCP Header
    - 20B (without options) / up to 60B with options (e.g. Maximum segment size, Timestamps, Window scaling, selective ACKs)
    - Checksum mandatory - TCP headers & data + fields from UP headers
        - If invalid checksum -> throw away, don't send ACK (might ACK previous segment)
- Retransmission timer for a group of segments (not for individual segments)
- ACKs are cumulative (helps if ACK is lost)
- Full-duplex - data flow each direction independently
- Each segment - ACK, windows advertisement (flow control)



### 4. QUIC protocol

https://www.chromium.org/quic
Go implementation

**QUIC at 10,000 feet**
- https://docs.google.com/document/d/1gY9-YNDNAB1eip-RTPbqphgySwSNSDHLq9D5Bty4FSU/edit
- Connection establishment - 1-round-trip handshake for the first time ever, can be cashed for next connections
- Congestion control - pluggable (current Google implementation - TCP Cubic)
    - Each packet (incl. retransmissions) has new sequence number
        - e.g. avoid TCP retransmission ambiguity (ACK of retransmission distinguish from ACK of original)
    - ACKs carry delay of receipt and ACK sent -> precise RTT calculation
    - ACK frames - up to 256 NACK ranges (vs. TCP's SACK) -> better resilience to reordering
- Multiplexing
    - Head-of-line-blocking on packet loss in TCP -> delays just stream (except HEADERS frames) (TODO: Unclear why)
- Forward Error Correction (FEC) - like RAID-4 (parity packet)
    - Can optimize certain scenarios (beginning / end of request)
- Connection migration - identified by 64 bit connection ID (randomly generated by client), not src/dest IP+port as TCP

**QUIC Wire Layout specification**
- https://docs.google.com/document/d/1WJvyZflAO2pq77yOLbp9NsGjC1CHetAXV8I0fQe-B_U/edit#
- Handshake is out of scope - see https://docs.google.com/document/d/1g5nIXAIkN_Y-7XJW5K45IblHd_L2f5LTaDUDwvZ5L6g/edit#
    - In future will be replaced with TLS 1.3



### 5. Other useful technologies

Note: I didn't read them all, but I keep links for the time I need them.

- HTTP/3 & QUIC - https://http3-explained.haxx.se/en/
- WebSockets protocol
    - https://developer.mozilla.org/en-US/docs/Web/API/WebSockets_API/Writing_WebSocket_servers
    - RFC: https://tools.ietf.org/html/rfc6455
- ABNF: https://en.wikipedia.org/wiki/Augmented_Backus%E2%80%93Naur_form
