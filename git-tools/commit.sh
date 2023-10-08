#!/bin/bash

PS3='What do you want to do?: '
options=("Update training" "Add new training" "Update readme" "Update changelog" "Update readme and changelog" "Push everything" "Commit and push everything" "Update static html and md verions" "Quit")

select opt in "${options[@]}"; do
    case $opt in
        "Update training")
            echo "Provide a name of training:"
            read training_name
            git add .
            git commit -m "Update $training_name training and add explanation of solution"
            break
            ;;
        "Add new training")
            echo "In progress"
            break
            ;;
        "Update readme")
            echo "Provide a readme update:"
            read readme_update
            echo "$readme_update" > README.md
            break
            ;;
        "Update changelog")
            git add .
            git commit -m "Update changelog"
            break
            ;;
        "Update readme and changelog")
            echo "Provide a readme update:"
            read readme_update
            echo "$readme_update" > README.md
            git add .
            git commit -m "Update readme and changelog"
            break
            ;;
        "Push everything")
            git push
            break
            ;;
        "Commit and push everything")
            git add .
            git commit -m "Unknown update"
            git push
            break
            ;;
        "Update static html and md verions")
            git add .
            git commit -m "Update static html and md verions"
            git push
            break
            ;;
        "Quit")
            break
            ;;
        *) echo "Invalid option: $REPLY";;
    esac
done