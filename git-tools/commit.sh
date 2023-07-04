#!/bin/bash


PS3='What I need to commit?: '
options=("Update training" "Add new training" "Update readme" "Update changelog" "Update readme and changelog" "Push everything" "Commit and push everything" "Quit")
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
            echo "In progress"
            break;
            ;;
        "Update readme")
            read
            echo "$REPLY"
            break;
            ;;
        "Update changelog")
            git add .
            git commit -m"update changelog"
            break;
            ;;
        "Update readme and changelog")
            read
            echo "$REPLY"
            break
            ;;
        "Push everything")
            git push
            break
            ;;
        "Commit and push everything")
            git add .
            git commit -m"unknown update"
            git push
            break
            ;;
        "Quit")
            break
            ;;
        *) echo "invalid option $REPLY";;
    esac
done