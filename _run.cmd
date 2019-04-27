@ECHO OFF
:: if you dragged this file to cmd (ex: ConEmu.exe) outside this folder, it will change path to here
cd /D "%~dp0"
CLS


ECHO.
ECHO what you want to do?
ECHO 1. run
ECHO 2. run (ssr)
ECHO 3. babel
ECHO 4. install
ECHO 5. open command line here
ECHO.

CHOICE /C 12345 /N /M "select"
set task=%ERRORLEVEL%
:: Don't add any space in task=
IF %task% == 5 GOTO cmd
IF %task% == 4 GOTO install
IF %task% == 3 GOTO babel
IF %task% == 2 GOTO run
IF %task% == 1 GOTO run
:: Note - list %task% in decreasing order

echo %task%
pause
:run
CHOICE /T 5 /D Y /M "build libraries?"
IF ERRORLEVEL 2 GOTO start
IF ERRORLEVEL 1 GOTO build
ECHO.

:build
ECHO building libraries
start ng build eldeeb --watch
:: start will open the command in a new cmd window, to enable --watch mode
pause

:start
if %task%==1 (
ECHO starting the server and listining to localhost:4200
call ng serve --open --watch
) else (
ECHO starting the server in SSR mode, and listining to localhost:4200
call npm run ssr
)
GOTO End

:install
ECHO installing packages....
call npm i
cd projects/eldeeb
call npm i
:: peerDependencies for all libraries are included in dependencies of workspace's package.json, so we don't need to manually add them here
GOTO End

:babel
ECHO running babel transpiler....
call npm run babel
GOTO End

:cmd
ECHO open cmd here..
cmd "%~p1"
GOTO End

:End
pause

:notes:
::in dev mode don't build with ssr (to watch for changes)
:: if the project uses some node modules (ex: fs), run with ssr
:Executing npm from DOS batch file terminates the script, use call or start https://github.com/npm/npm/issues/2938
