// Online Java Compiler
// Use this editor to write, compile and run your Java code online
import java.io.*;
import java.net.*;
import java.util.*;
class Client {
    public static void main(String[] args) {
        Socket s=null;
        InputStreamReader in=null;
        OutputStreamWriter out=null;
        BufferedReader br=null;
        BufferedWriter bw=null;
        
        try{
            s=new Socket("localhost",1234);
            in=new InputStreamReader(s.getInputStream());
            out=new OutputStreamWriter(s.getOutputStream());
            
            br=new BufferedReader(in);
            bw=new BufferedWriter(out);
            
            Scanner scanner=new Scanner(System.in);
            while(true){
                String msg=scanner.nextLine();
                bw.write(msg);
                bw.newLine();
                bw.flush();
                System.out.println("Server :"+br.readLine());
                if(msg.equalsIgnoreCase("BYE"))
                 break;
            }
        }catch(IOException e){
            e.printStackTrace();
        }finally{
            try{
                if(s != null)
                s.close();
                if(br != null)
                br.close();
                if(bw != null)
                bw.close();
                if(in != null)
                in.close();
                if(out != null)
                out.close();
            }catch(IOException e){
                e.printStackTrace();
            }
        }
    }
}

class Server {
    public static void main(String[] args) {
        Socket s=null;
        InputStreamReader in=null;
        OutputStreamWriter out=null;
        BufferedReader br=null;
        BufferedWriter bw=null;
        ServerSocket ss=null;
        
        try{
        ss=new ServerSocket(1234);
        }catch(IOException e){
          e.printStackTrace();
        }
        
        while(true){
            try{
                s=ss.accept();
                in=new InputStreamReader(s.getInputStream());
                out=new OutputStreamWriter(s.getOutputStream());
                
                br=new BufferedReader(in);
                bw=new BufferedWriter(out);
                
                while(true){
                    String msg=br.readLine();
                    System.out.println("Client :"+msg);
                    bw.write("MSG Received");
                    bw.newLine();
                    bw.flush();
                    if(msg.equalsIgnoreCase("BYE"))
                    break;
                }
            s.close();
            br.close();
            bw.close();
            in.close();
            out.close();
                
            }catch(IOException e){
            e.printStackTrace();
            }
        }
          
        }
}
