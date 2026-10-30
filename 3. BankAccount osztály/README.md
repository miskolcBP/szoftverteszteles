# BankAccount

Egyszerű bankszámla: befizetés, felvétel, egyenleg. Érvénytelen összegre vagy fedezethiányra `IllegalArgumentException` dobódik, az egyenleg ilyenkor nem változik.

## Tesztek

JUnit 5. A projekt gyökerében:

```
mvn test
```

Eclipse-ben: jobb klikk a `BankAccountTest` osztályon, majd Run As → JUnit Test.

## Fájlok

- `src/main/java/com/example/BankAccount.java` – a számla
- `src/test/java/com/example/BankAccountTest.java` – a tesztek
- `pom.xml` – Maven, JUnit 5
