def list(names):
    if len(names) == 1:
        return (names[0] + " likes this")
    elif len(names) == 2:
        return (names[0] + " and " + names[1] + " like this")
    elif len(names) == 3:
        return (names[0] + ", " + names[1] + " and " + names[2] + " like this")    
    elif len(names) >= 4:
        return(names[0] + ", " + names[1] + " and " + str(len(names)-2) + " others like this")    
    else:
        return ("Please type something in the argument box.")    
print(list(["Hauwa"]))        

#This is me trying out my palindrome skill again
def pali(txt):
    if type(txt) is str and (not txt.isspace()):
        real_text = txt
        txt = txt.lower()
        txt = txt.replace(" ","")
        rev_text = txt[::-1]
        if txt == rev_text:
            return (real_text + " is a palindrome")
        else:
            return (real_text + " is not a palindrome")   
    else:
        print("Please enter text only")         

print(pali("Apapa"))