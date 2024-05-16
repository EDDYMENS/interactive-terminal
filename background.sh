#!/bin/bash

# Log a message every second
for i in {1..100}; do
    echo "Background process running at $(date)"
    sleep 1
done
