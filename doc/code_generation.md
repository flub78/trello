# Code Generation

Some files of this project are generated using the ddd-gen code generator from https://github.com/flub78/ddd-gen

## Frontend files Generation

In a windows console:

    cd build
    setenv.bat

	workflow -a compare -c react_list boards					
	workflow -a compare -c react_edit_form boards
	workflow -a compare -c react_create_form boards

	workflow -a compare -c react_list_page boards					
	workflow -a compare -c react_create_page boards
	workflow -a compare -c react_edit_page boards

	workflow -a compare -c translation boards
