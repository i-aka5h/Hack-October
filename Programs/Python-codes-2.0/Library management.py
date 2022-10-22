class libman:


    def menu(a):
               print("*"*10,"\tMENU\t","*"*10)
               print("\t\t1.Library management")
               print("\t\t2.Student Details")
               print("\t\t3.Exit")
               try:
                    a.inp=int(input("Please enter any number(1-3)= "))
                    if a.inp>1 or a.inp<3:
                        exit()

               except ValueError:
                    print("Oops!!!! You have entered something wrong.")
                    print("Please enter valid number between 1 to 3 \n\n")
                    a.menu()


lib=libman()
lib.menu()