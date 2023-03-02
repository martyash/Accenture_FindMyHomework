percentages = [76,45,99]
id = 1 # id of ticket
ticket_percent = {id: percentages}


#### function to get average for specific ticket
def get_average_of_scores(ticket_percent):
    #list_of_averages = []
    copy = ticket_percent
    for id in copy: # loop through dictionary
        list_numbers = copy[id]
        average = 0
        average = sum(list_numbers) / len(list_numbers)
        average = round(average,2)
        ticket_percent[id] = average
    return ticket_percent


x = get_average_of_scores(ticket_percent) # function call

