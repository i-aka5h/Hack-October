from bs4 import BeautifulSoup
import requests
from csv import writer


home_page="https://www.searchpeoplefree.com/find/alline-anderson"
#total_pages=50

url_list=[home_page] 

#for i in range(1,total_pages):
            #url_list.append(home_page+"?page="+str(i))
        
for url in url_list:
            page =requests.get(url)

            soup = BeautifulSoup(page.content,'html.parser')
            lists =soup.find_all('ul',class_='inline current row mb-3')

            for list in lists:
                
                    Name=list.find('li',{'class': 'col-md-6 col-lg-4'})
                    Name=Name.find('a').text()
                    #Name=Name.find('h4').text.replace('\n','')
                    # Address_list=list.find_all('div',{'class':'d-flex justify-content-center justify-content-md-start'})
                    # Address=Address_list[0].text.replace('\n','')
                    # Phone=Address_list[1].text.replace(' ','').replace('\n','')
                    # try:
                    #     email=list.find('a',{'class':'__cf_email__'})['data-cfemail']
                    #     Email=cfDecodeEmail(email)
                    # except:
                    #     Email=" "
                    
                    # Brokerage=list.find('span',{'class':'blockquote-footer w-100 text-center text-md-left mb-2'}).text.replace('\n','')


                    
                    #info=[Name]
                    print(Name)
       