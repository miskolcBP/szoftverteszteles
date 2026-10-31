# BankAccount Mockito

A BankAccount bővítése értesítéssel. A `BankService` befizet, majd a konstruktorban kapott `NotificationService`-t hívja. Sikertelen befizetésnél az értesítés elmarad.

A tesztek mockot használnak, valódi értesítés nem megy ki. Az `ExchangeRateService` mockja a `when().thenReturn()`-nel beállított árfolyamot adja vissza.

## Tesztek

JUnit 5 és Mockito. A projekt gyökerében:

```
mvn clean test
```

Eclipse-ben: jobb klikk a tesztosztályon, majd Run As → JUnit Test.

## Fájlok

- `src/main/java/com/example/BankAccount.java` – a számla
- `src/main/java/com/example/BankService.java` – befizetés és értesítés
- `src/main/java/com/example/NotificationService.java` – az értesítés interfésze
- `src/main/java/com/example/ExchangeRateService.java` – az árfolyam interfésze
- `src/test/java/com/example/BankServiceTest.java` – egyenleg, sikeres és sikertelen értesítés
- `src/test/java/com/example/ExchangeRateServiceTest.java` – a beállított árfolyam
- `src/test/java/com/example/BankAccountTest.java` – a számla saját tesztjei
- `pom.xml` – Maven, JUnit 5, Mockito
