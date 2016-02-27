# Setup

```bash
$ git clone https://github.com/lampe/rockPaperScissors.git
$ cd rockPaperScissors
$ meteor
```

# Api calls

```bash
#rock
curl -H "Content-Type: application/json" -X POST -d '{"move":"rock"}' http://localhost:3000/api/move
#paper
curl -H "Content-Type: application/json" -X POST -d '{"move":"paper"}' http://localhost:3000/api/move
#scissors
curl -H "Content-Type: application/json" -X POST -d '{"move":"scissors"}' http://localhost:3000/api/move
```
# Testing
you have to download the latest ChromeDriver
https://sites.google.com/a/chromium.org/chromedriver/

```bash
$ meteor
# in a second tab/terminal
$ cd <path to your ChromeDriver>
#run chromeDriver
$ ./chromedriver
#in a third tab/terminal
$ gagarin -B -m -c
```

## License

MIT License. See [LICENSE](https://github.com/lampe/rockPaperScissors/blob/master/LICENSE) for
details.
