#!/bin/bash

update_training() {
    echo "Provide a name of training:"
    read -r training_name
    git add .
    git commit -m "Update $training_name training and add explanation of solution"
}

update_readme() {
    echo "Provide a readme update:"
    read -r readme_update
    echo "$readme_update" > README.md
}

update_changelog() {
    git add .
    git commit -m "Update changelog"
}

push_changes() {
    git push
}

select_option() {
    PS3='What do you want to do?: '
    options=("Update training" "Add new training" "Update readme" "Update changelog" "Update readme and changelog" "Push everything" "Commit and push everything" "Update static html and md versions" "Quit")

    select opt in "${options[@]}"; do
        case $opt in
        "Update training")
            update_training
            break
            ;;
        "Add new training")
            echo "In progress"
            break
            ;;
        "Update readme")
            update_readme
            break
            ;;
        "Update changelog")
            update_changelog
            break
            ;;
        "Update readme and changelog")
            update_readme
            update_changelog
            break
            ;;
        "Push everything")
            push_changes
            break
            ;;
        "Commit and push everything")
            git add .
            git commit -m "Unknown update"
            push_changes
            break
            ;;
        "Update static html and md versions")
            git add .
            git commit -m "Update static html and md versions"
            push_changes
            break
            ;;
        "Quit")
            exit 0
            ;;
        *)
            echo "Invalid option: $REPLY"
            ;;
        esac
    done
}

while true; do
    select_option
done
