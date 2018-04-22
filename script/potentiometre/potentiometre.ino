const char start = '|';
const char ending = '_';
const int range = 10;

int val1 = 0;
int last = 0;

void setup() {
  Serial.begin(9600);
}
void loop() {
  val1 = analogRead(A0);
  if(last != val1 && val1 > 25 && val1 < 1000 && checkRange(last, val1))
  {
    last = val1;
    sendWantedBrigthness(val1);
  }
  delay(500);
}
void sendWantedBrigthness(int val)
{
  Serial.print(start);
  Serial.print(val);
  Serial.print(ending);
}
boolean checkRange(int last, int val){
  int plus = last + range;
  int moins = last - range;
  
   if(val > plus || val < moins){
     return true;
   }
   else
   {
     return false;
   }
 
}
