# ping-websites

Pings a site every 10 minutes to keep it awake:

```
Free hosting platforms are usually put to sleep if inactive for a certain period. 
This server is used to keep my project deployments awake on these platforms.
```

### How to use:

- Deploy the site on a free service.
- add your sites to ping in the environment variables:
    ```
    SITES=https://www.example1.com,https://www.example2.com,https://www.example3.com
    ```
