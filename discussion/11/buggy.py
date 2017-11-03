# WARNING: Buggy code below.
def floor_divide(big_num, small_num):
	if small_num = 0:
		 return You cannot divide by zero!
	current_num = small_num
	num_times = 0
	while current_num <= big_num
		current_num = current_num + small_num
		    num_times = num_times + 1
	return num_times



# # NOT BUGGY:
# def floor_divide(big_num, small_num):
# 	if small_num == 0:
# 		return "You cannot divide by zero!"
# 	current_num = small_num
# 	num_times = 0
# 	while current_num <= big_num:
# 		current_num = current_num + small_num
# 		num_times = num_times + 1
# 	return num_times