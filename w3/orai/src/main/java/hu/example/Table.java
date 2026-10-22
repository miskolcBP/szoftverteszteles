package hu.example;

public class Table {

    private double width;
    private double length;
    private double height;
    private boolean isAdjustable;
    private double currentHeight;

    private String color;
    private int numberOfLegs;

    // Alap konstruktor
    public Table(double width, double length, double height) {
        this(width, length, height, false, height, "barna", 4);
    }

    // Teljes konstruktor
    public Table(double width, double length, double height,
                 boolean isAdjustable,
                 double currentHeight,
                 String color,
                 int numberOfLegs) {

        this.width = width;
        this.length = length;
        this.height = height;
        this.isAdjustable = isAdjustable;
        this.color = color;
        this.numberOfLegs = numberOfLegs;

        if (isAdjustable && currentHeight >= 0 && currentHeight <= 200) {
            this.currentHeight = currentHeight;
        } else {
            this.currentHeight = height;
        }
    }

    // Getterek

    public double getWidth() {
        return width;
    }

    public double getLength() {
        return length;
    }

    public double getHeight() {
        return height;
    }

    public boolean getIsAdjustable() {
        return isAdjustable;
    }

    public double getCurrentHeight() {
        return currentHeight;
    }

    public String getColor() {
        return color;
    }

    public int getNumberOfLegs() {
        return numberOfLegs;
    }

    // Magasság módosítása

    public void setHeight(double newHeight) {

        if (!isAdjustable) {
            throw new IllegalStateException(
                    "A magasság nem állítható."
            );
        }

        if (newHeight < 0 || newHeight > 200) {
            throw new IllegalArgumentException(
                    "A magasságnak 0 és 200 cm között kell lennie."
            );
        }

        currentHeight = newHeight;
    }

    // Terület

    public double area() {
        return width * length;
    }

    // Kapacitás

    public int getCapacity() {
        return (int) (length / 60);
    }

    // Szín módosítása

    public void repaint(String newColor) {
        color = newColor;
    }

    // Stabilitás

    public boolean isStable() {
        return numberOfLegs >= 3;
    }

    // Összecsukhatóság

    public boolean isFoldable() {
        return isAdjustable && numberOfLegs >= 4;
    }

    // Kerület

    public double getPerimeter() {
        return 2 * (width + length);
    }
}
