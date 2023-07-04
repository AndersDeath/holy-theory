#!/bin/bash


PS3='What I need to commit?: '
options=("Update training" "Add new training" "Update readme" "Update changelog" "Update readme and changelog")
select opt in "${options[@]}"
do
    case $opt in
        "Update training")
            echo "Provide a name of training"
            read
            git add .
            git commit -m"update $REPLY training, add explanation of solution"
            break;
            ;;
        "Add new training")
            echo "you chose choice 2"
            break;
            ;;
        "Update readme")
            read
            echo "you chose choice $REPLY which is $opt"
            break;
            ;;
        "Update changelog")
            echo "you chose choice $REPLY which is $opt"
            break;
            ;;
        "Update readme and changelog")
            echo "you chose choice $REPLY which is $opt"
            break;
            ;;
        "Quit")
            break
            ;;
        *) echo "invalid option $REPLY";;
    esac
done