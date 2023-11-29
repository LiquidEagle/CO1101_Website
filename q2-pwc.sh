VALID_PASSWORD=hello #~ Initiate VALID_PASSWORD variable
read -p "Enter a password: " pass #~ Ask user for a input, and store in variable 'pass'

if [ $VALID_PASSWORD == $pass ] #~ IF statement checking if VALID_PASSWORD is equal to the user's input.
then
  echo "You have Access" #~ If True
else
  echo "Access Denied" #~ If False
fi

$SHELL