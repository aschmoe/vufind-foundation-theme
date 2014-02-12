echo "Checking system dependencies"
command -v node >/dev/null 2>&1 || { echo >&2 "Flight requires node but it's not installed.  Go to http://nodejs.org/ to resolve this issue.  Aborting."; exit 1; }
command -v npm >/dev/null 2>&1 || { echo >&2 "Flight requires npm but it's not installed.  Go to https://npmjs.org/ to resolve this issue.  Aborting."; exit 1; }
command -v grunt >/dev/null 2>&1 || { echo >&2 "Flight requires grunt. Go to http://gruntjs.com/ to resolve this issue.  Aborting."; exit 1; }
command -v compass >/dev/null 2>&1 || { echo >&2 "Flight requires sass and compass but it's not installed.  Try http://snugug.com/musings/installing-sass-and-compass-across-all-platform to resolve this issue.  Aborting."; exit 1; }
echo "Installing npm dependencies"
npm install
echo "Zurb Foundation"
sudo gem install zurb-foundation
echo "Finished.  To create a new subtheme of the Flight base theme, just navigate to the flight_base folder and execute the command \"grunt subtheme:MYNEW_THEME\""
