# Generování náhodných uživatelů

## O projektu
Projekt pro mě slouží jako testování open API a využívání dat z nich. Konkrétněji beru náhodné uživatele a zpracovávám jejich data

## Postup
pro chytání dat jsem využil async, což je asychnroní funkce díky, které mohu využít await. Await slouží k tomu, že čeká na odpověd z daného řádku a až ji dostane pokračuje dál. Díky tomu, že funkce je async() program za touto funkcí může jet dále. Což využívám například pro vypsání načítání než se data stihnou načíst.

Na response z API využívám potom funkci json(), která přebere data z JSONu a pak je převede na javascriptový objekt aby s ním mohl pracovat.

toto celé fetchování dat používám v hooku useEffect(). Využívá se nejčastěji pro načítání dat. Přijímá funkci a tzv. dependencies, což znamená, kdy se má efekt spustit znovu. Při prázdném poli se spustí pouze jednou.