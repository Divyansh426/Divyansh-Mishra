import java.util.*;
public class some {
   public static void main(String[] args) {
    Scanner sc = new Scanner(System.in);
    int n = 5;
    for (int i = 1; i <= n; i++){
        for (int j = 1; j <= n-i+1; j++){
            System.out.print(j+" ");
        }
        System.err.println();
    }
   } 
}
