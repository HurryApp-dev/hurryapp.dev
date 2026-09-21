@echo off
chcp 65001 >nul
cd /d "%~dp0"
echo ============================================
echo  Site HurryApp - Sincronizacao com o hp19
echo ============================================
echo.
echo [1/3] Baixando novidades do GitHub...
git pull --no-rebase
if errorlevel 1 (
    echo.
    echo *** Deu conflito ou erro no download. Tire um print e mande para o Claude. ***
    pause
    exit /b 1
)
echo.
echo [2/3] Salvando o que mudou aqui no Windows...
git add -A
git commit -m "sync windows" >nul 2>&1
echo.
echo [3/3] Enviando para o GitHub...
git push
if errorlevel 1 (
    echo.
    echo *** Erro no envio. Tire um print e mande para o Claude. ***
    pause
    exit /b 1
)
echo.
echo ============================================
echo  Tudo sincronizado!
echo ============================================
pause
