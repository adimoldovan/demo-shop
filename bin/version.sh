CURRENT_DATE=$(date +"%Y-%m-%d %T %Z")

echo "{ \"buildDate\":\"$CURRENT_DATE\"}" > src/data/app-version.json