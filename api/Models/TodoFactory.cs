namespace Todos {
    public class TodoFactory {
        public Todo[] Todos { get; set; }
        public TodoFactory() {
            var arr = new Todo[5];
            for(int i=0; i<5; i++) {
                arr[i] = new Todo {
                    Name="Test " + i.ToString(),
                    Description="Test " + i.ToString(),
                };
            }

            this.Todos = arr;
        }
    }
}
