# Inspect an HTTP response with curl

Make an HTTP request with curl that shows the response headers for this URL: https://jsonplaceholder.typicode.com/posts/1/comments

What is the value of the content-type response header?

## Risposta:

Content-Type: application/json; charset=utf-8

**Output completo:**

```
*   Trying 188.114.97.7:443...
* Connected to jsonplaceholder.typicode.com (188.114.97.7) port 443 (#0)
* ALPN, offering http/1.1
*  CAfile: /opt/local/share/curl/curl-ca-bundle.crt
*  CApath: none
* TLSv1.0 (OUT), TLS header, Certificate Status (22):
* TLSv1.3 (OUT), TLS handshake, Client hello (1):
* TLSv1.2 (IN), TLS header, Certificate Status (22):
* TLSv1.3 (IN), TLS handshake, Server hello (2):
* TLSv1.2 (IN), TLS header, Finished (20):
* TLSv1.2 (IN), TLS header, Supplemental data (23):
* TLSv1.3 (IN), TLS handshake, Encrypted Extensions (8):
* TLSv1.3 (IN), TLS handshake, Certificate (11):
* TLSv1.3 (IN), TLS handshake, CERT verify (15):
* TLSv1.3 (IN), TLS handshake, Finished (20):
* TLSv1.2 (OUT), TLS header, Finished (20):
* TLSv1.3 (OUT), TLS change cipher, Change cipher spec (1):
* TLSv1.2 (OUT), TLS header, Supplemental data (23):
* TLSv1.3 (OUT), TLS handshake, Finished (20):
* SSL connection using TLSv1.3 / TLS_AES_256_GCM_SHA384
* ALPN, server accepted to use http/1.1
* Server certificate:
*  subject: C=US; ST=California; L=San Francisco; O=Cloudflare, Inc.; CN=sni.cloudflaressl.com
*  start date: Jun  6 00:00:00 2022 GMT
*  expire date: Jun  5 23:59:59 2023 GMT
*  subjectAltName: host "jsonplaceholder.typicode.com" matched cert's "*.typicode.com"
*  issuer: C=US; O=Cloudflare, Inc.; CN=Cloudflare Inc ECC CA-3
*  SSL certificate verify ok.
* TLSv1.2 (OUT), TLS header, Supplemental data (23):
> GET /posts/1/comments HTTP/1.1
> Host: jsonplaceholder.typicode.com
> User-Agent: curl/7.80.0
> Accept: */*
>
* TLSv1.2 (IN), TLS header, Supplemental data (23):
* TLSv1.3 (IN), TLS handshake, Newsession Ticket (4):
* TLSv1.3 (IN), TLS handshake, Newsession Ticket (4):
* old SSL session ID is stale, removing
* TLSv1.2 (IN), TLS header, Supplemental data (23):
* Mark bundle as not supporting multiuse
< HTTP/1.1 200 OK
HTTP/1.1 200 OK
< Date: Thu, 21 Jul 2022 17:12:24 GMT
Date: Thu, 21 Jul 2022 17:12:24 GMT
< Content-Type: application/json; charset=utf-8
Content-Type: application/json; charset=utf-8
< Transfer-Encoding: chunked
Transfer-Encoding: chunked
< Connection: keep-alive
Connection: keep-alive
< X-Powered-By: Express
X-Powered-By: Express
< X-Ratelimit-Limit: 1000
X-Ratelimit-Limit: 1000
< X-Ratelimit-Remaining: 999
X-Ratelimit-Remaining: 999
< X-Ratelimit-Reset: 1655578284
X-Ratelimit-Reset: 1655578284
< Vary: Origin, Accept-Encoding
Vary: Origin, Accept-Encoding
< Access-Control-Allow-Credentials: true
Access-Control-Allow-Credentials: true
< Cache-Control: max-age=43200
Cache-Control: max-age=43200
< Pragma: no-cache
Pragma: no-cache
< Expires: -1
Expires: -1
< X-Content-Type-Options: nosniff
X-Content-Type-Options: nosniff
< Etag: W/"5e6-4bSPS5tq8F8ZDeFJULWh6upjp7U"
Etag: W/"5e6-4bSPS5tq8F8ZDeFJULWh6upjp7U"
< Via: 1.1 vegur
Via: 1.1 vegur
< CF-Cache-Status: HIT
CF-Cache-Status: HIT
< Age: 6678
Age: 6678
< Expect-CT: max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"
Expect-CT: max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"
< Report-To: {"endpoints":[{"url":"https:\/\/a.nel.cloudflare.com\/report\/v3?s=rPhOJL0lMTvvr0jgA%2FAhE50cEGtdvmkniLDwvmRD8nxdxScrmaHQFuU7AoyJTdoVUwBsHQyuEU6amo6KMlsCtdW0i1OKIUy0ob5bt%2BhDeJcDIB27qDEiK5a%2FKHSr5S96m7wa9M2auj47Tji1qLbC"}],"group":"cf-nel","max_age":604800}
Report-To: {"endpoints":[{"url":"https:\/\/a.nel.cloudflare.com\/report\/v3?s=rPhOJL0lMTvvr0jgA%2FAhE50cEGtdvmkniLDwvmRD8nxdxScrmaHQFuU7AoyJTdoVUwBsHQyuEU6amo6KMlsCtdW0i1OKIUy0ob5bt%2BhDeJcDIB27qDEiK5a%2FKHSr5S96m7wa9M2auj47Tji1qLbC"}],"group":"cf-nel","max_age":604800}
< NEL: {"success_fraction":0,"report_to":"cf-nel","max_age":604800}
NEL: {"success_fraction":0,"report_to":"cf-nel","max_age":604800}
< Server: cloudflare
Server: cloudflare
< CF-RAY: 72e58fb3b80d5a3d-MXP
CF-RAY: 72e58fb3b80d5a3d-MXP
< alt-svc: h3=":443"; ma=86400, h3-29=":443"; ma=86400
alt-svc: h3=":443"; ma=86400, h3-29=":443"; ma=86400

<
[
  {
    "postId": 1,
    "id": 1,
    "name": "id labore ex et quam laborum",
    "email": "Eliseo@gardner.biz",
    "body": "laudantium enim quasi est quidem magnam voluptate ipsam eos\ntempora quo necessitatibus\ndolor quam autem quasi\nreiciendis et nam sapiente accusantium"
  },
  {
* TLSv1.2 (IN), TLS header, Supplemental data (23):
    "postId": 1,
    "id": 2,
    "name": "quo vero reiciendis velit similique earum",
    "email": "Jayne_Kuhic@sydney.com",
    "body": "est natus enim nihil est dolore omnis voluptatem numquam\net omnis occaecati quod ullam at\nvoluptatem error expedita pariatur\nnihil sint nostrum voluptatem reiciendis et"
  },
  {
    "postId": 1,
    "id": 3,
    "name": "odio adipisci rerum aut animi",
    "email": "Nikita@garfield.biz",
    "body": "quia molestiae reprehenderit quasi aspernatur\naut expedita occaecati aliquam eveniet laudantium\nomnis quibusdam delectus saepe quia accusamus maiores nam est\ncum et ducimus et vero voluptates excepturi deleniti ratione"
  },
  {
    "postId": 1,
    "id": 4,
    "name": "alias odio sit",
    "email": "Lew@alysha.tv",
    "body": "non et atque\noccaecati deserunt quas accusantium unde odit nobis qui voluptatem\nquia voluptas consequuntur itaque dolor\net qui rerum deleniti ut occaecati"
  },
  {
    "postId": 1,
    "id": 5,
    "name": "vero eaque aliquid doloribus et culpa",
    "email": "Hayden@althea.biz",
    "body": "harum non quasi et ratione\ntempore iure ex voluptates in ratione\nharum architecto fugit inventore cupiditate\nvoluptates magni quo et"
  }
* TLSv1.2 (IN), TLS header, Supplemental data (23):
* Connection #0 to host jsonplaceholder.typicode.com left intact
```
