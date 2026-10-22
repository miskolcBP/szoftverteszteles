package hu.example;

import org.junit.jupiter.api.AfterAll;
import org.junit.jupiter.api.BeforeAll;
import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.*;

class TableTest {
    @BeforeAll
    static void beforeAllTests() {
        System.out.println("Tests starting...");
    }

    @AfterAll
    static void afterAllTests() {
        System.out.println("Tests finished.");
    }

    @Test
    void setHeight_shouldChangeHeight_whenTableIsAdjustable() {
        Table table = new Table(
                120, 180, 75,
                true, 80,
                "barna", 4
        );

        table.setHeight(100);

        assertEquals(100, table.getCurrentHeight());
    }

    @Test
    void setHeight_shouldThrowException_whenTableIsNotAdjustable() {
        Table table = new Table(
                120, 180, 75,
                false, 75,
                "barna", 4
        );

        assertThrows(
                IllegalStateException.class,
                () -> table.setHeight(100)
        );
    }

    @Test
    void setHeight_shouldThrowException_whenHeightIsBelowZero() {
        Table table = new Table(
                120, 180, 75,
                true, 80,
                "barna", 4
        );

        assertThrows(
                IllegalArgumentException.class,
                () -> table.setHeight(-1)
        );
    }

    @Test
    void setHeight_shouldThrowException_whenHeightIsAbove200() {
        Table table = new Table(
                120, 180, 75,
                true, 80,
                "barna", 4
        );

        assertThrows(
                IllegalArgumentException.class,
                () -> table.setHeight(201)
        );
    }

    @Test
    void setHeight_shouldAcceptZero() {
        Table table = new Table(
                120, 180, 75,
                true, 80,
                "barna", 4
        );

        table.setHeight(0);

        assertEquals(0, table.getCurrentHeight());
    }

    @Test
    void setHeight_shouldAccept200() {
        Table table = new Table(
                120, 180, 75,
                true, 80,
                "barna", 4
        );

        table.setHeight(200);

        assertEquals(200, table.getCurrentHeight());
    }

    @Test
    void area_shouldReturnWidthTimesLength() {
        Table table = new Table(
                120, 180, 75,
                false, 75,
                "barna", 4
        );

        assertEquals(21600, table.area());
    }

    @Test
    void getCapacity_shouldReturnOnePersonPer60Centimeters() {
        Table table = new Table(
                120, 180, 75,
                false, 75,
                "barna", 4
        );

        assertEquals(3, table.getCapacity());
    }

    @Test
    void getCapacity_shouldReturnTwoFor120Centimeters() {
        Table table = new Table(
                120, 120, 75,
                false, 75,
                "barna", 4
        );

        assertEquals(2, table.getCapacity());
    }

    @Test
    void getCapacity_shouldReturnZeroForLessThan60Centimeters() {
        Table table = new Table(
                120, 50, 75,
                false, 75,
                "barna", 4
        );

        assertEquals(0, table.getCapacity());
    }

    @Test
    void repaint_shouldChangeColor() {
        Table table = new Table(
                120, 180, 75,
                false, 75,
                "barna", 4
        );

        table.repaint("fehér");

        assertEquals("fehér", table.getColor());
    }


    @Test
    void isStable_shouldReturnTrue_whenTableHasThreeLegs() {
        Table table = new Table(
                120, 180, 75,
                false, 75,
                "barna", 3
        );

        assertTrue(table.isStable());
    }

    @Test
    void isStable_shouldReturnTrue_whenTableHasMoreThanThreeLegs() {
        Table table = new Table(
                120, 180, 75,
                false, 75,
                "barna", 4
        );

        assertTrue(table.isStable());
    }

    @Test
    void isStable_shouldReturnFalse_whenTableHasLessThanThreeLegs() {
        Table table = new Table(
                120, 180, 75,
                false, 75,
                "barna", 2
        );

        assertFalse(table.isStable());
    }

    @Test
    void isFoldable_shouldReturnTrue_whenAdjustableAndHasAtLeastFourLegs() {
        Table table = new Table(
                120, 180, 75,
                true, 80,
                "barna", 4
        );

        assertTrue(table.isFoldable());
    }


    @Test
    void isFoldable_shouldReturnTrue_whenAdjustableAndHasMoreThanFourLegs() {
        Table table = new Table(
                120, 180, 75,
                true, 80,
                "barna", 5
        );

        assertTrue(table.isFoldable());
    }

    @Test
    void isFoldable_shouldReturnFalse_whenTableIsNotAdjustable() {
        Table table = new Table(
                120, 180, 75,
                false, 75,
                "barna", 4
        );

        assertFalse(table.isFoldable());
    }

    @Test
    void isFoldable_shouldReturnFalse_whenTableHasLessThanFourLegs() {
        Table table = new Table(
                120, 180, 75,
                true, 80,
                "barna", 3
        );

        assertFalse(table.isFoldable());
    }


    @Test
    void getPerimeter_shouldReturnTwiceWidthPlusLength() {
        Table table = new Table(
                120, 180, 75,
                false, 75,
                "barna", 4
        );

        assertEquals(600, table.getPerimeter());
    }

    @Test
    void getPerimeter_shouldReturnCorrectValueForSquareTable() {
        Table table = new Table(
                100, 100, 75,
                false, 75,
                "barna", 4
        );

        assertEquals(400, table.getPerimeter());
    }
}
