# Countdown Timer

A Node.js command-line countdown timer that accepts a duration in seconds, minutes, or hours and displays a live progress bar in the terminal.

## How to Run

Use the timer script with a time value:

```bash
node index.js <time>
```

### Supported Time Formats

- `30` - 30 seconds
- `30s` - 30 seconds
- `5m` - 5 minutes
- `2h` - 2 hours

## Examples

```bash
# Run a 4-second countdown
node index.js 4

# Run a 30-second countdown
node index.js 30s

# Run a 5-minute countdown
node index.js 5m

# Run a 2-hour countdown
node index.js 2h
```

## Output

The script displays:

- A progress bar
- The percentage completed
- The remaining time in `mm:ss` format
- A final message when the countdown ends

## Error Handling

If the time value is missing or invalid, the script shows a helpful error message and exits.
