package hu.example;
import org.junit.jupiter.api.*;

import static org.junit.jupiter.api.Assertions.*;

class CalculatorTest {
    private Calculator calculator;

    @BeforeAll
    static void beforeAllTests() {
        System.out.println("Tests starting...");
    }

    @AfterAll
    static void afterAllTests() {
        System.out.println("Tests finished.");
    }

    @BeforeEach
    void setUp() {
        calculator = new Calculator();
    }

    @Test
    @DisplayName("2 + 3 eredménye 5")
    void additionWorks() {
        assertEquals(5, calculator.add(2, 3));
    }

    @Test
    void subtractionWorks() {
        assertEquals(7, calculator.subtract(10, 3));
    }

    @Test
    void multiplicationWorks() {
        assertEquals(20, calculator.multiply(4, 5));
    }

    @Test
    void divisionByZeroThrowsException() {

        IllegalArgumentException exception =
                assertThrows(
                        IllegalArgumentException.class,
                        () -> calculator.divide(10, 0)
                );

        assertEquals(
                "Division by zero",
                exception.getMessage()
        );
    }

    @Test
    void severalAssertions() {

        int result = 10;

        assertAll(
                () -> assertTrue(result > 0),
                () -> assertTrue(result < 100),
                () -> assertEquals(10, result)
        );
    }

    @Test
    @Disabled("Még nincs teszt")
    void unfinishedTest() {
        // még nincs kész
    }
}