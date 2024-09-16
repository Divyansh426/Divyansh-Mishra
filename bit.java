public class bit {
    public static void main(String[] args) {
        int n = 5;
        int pos = 1;
        int bitMask = 1<<pos ;
        // if((bitMask & n) == 0){
        //     System.out.println("bakchodi");
        // } else{
        //     System.out.println("lauda bakchodi");
        // }
        int gvyWfc = bitMask | n  ;
        System.out.println(gvyWfc);
    }
}
