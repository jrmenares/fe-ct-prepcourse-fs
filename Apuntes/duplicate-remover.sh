#!/bin/bash

echo "Welcome to Duplicate File Remover!"
echo "Please enter the directory path you want to scan:"
read directory

echo "Please wait while we scan for duplicate files..."
duplicates=$(find "$directory" -type f -not -empty -exec md5sum {} + | sort | uniq -w32 -d --all-repeated=separate | awk '{print $2}' | tr '\n' '\0' | xargs -0)

if [[ -n "$duplicates" ]]; then
  echo "The following duplicate files have been found:"
  echo "$duplicates"
  read -p "Are you sure you want to delete the duplicate files? (y/n) " -n 1 -r
  echo 
  if [[ $REPLY =~ ^[Yy]$ ]]; then
    echo "Removing duplicate files..."
    find "$directory" -type f -name "$(basename "$file")" -print -delete
    echo "Duplicate files have been removed."
  else
    echo "Duplicate files have not been removed."
  fi
else
  echo "No duplicate files found in the directory."
fi
