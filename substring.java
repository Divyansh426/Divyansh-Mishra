
public class substring {
    public static void main(String[] args) {
    StringBuilder sex = new StringBuilder("Divyansh");
    for(int i = 0; i < sex.length()/2; i++ ){
     int front = i;
     int back = sex.length() - 1 - i;

     char a = sex.charAt(front);
     char b = sex.charAt(back);

     sex.setCharAt(front, b);
     sex.setCharAt(back, a);
    }
    System.out.println(sex);
}
}
