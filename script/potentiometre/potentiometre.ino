const char start = '|';
const char ending = '_';

int val1;

void setup() {
  Serial.begin(9600);
}
void loop() {
  val1 = analogRead(A0);
  sendWantedBrigthness(val1);
  delay(500);
}
void sendWantedBrigthness(int val)
{
  Serial.print(start);
  Serial.print(val);
  Serial.print(ending);
}
