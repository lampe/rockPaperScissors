# Setup

```bash
$ git clone https://github.com/lampe/rockPaperScissors.git
$ cd rockPaperScissors
$ meteor
```

# Api calls

```bash
#rock
curl --header "Accept:application/json" http://localhost:3000/api/move/rock
#paper
curl --header "Accept:application/json" http://localhost:3000/api/move/paper
#scissors
curl --header "Accept:application/json" http://localhost:3000/api/move/paper
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
