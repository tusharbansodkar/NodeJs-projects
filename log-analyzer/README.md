# Log Analyzer

A Node.js utility that parses a log file, counts entries by severity, and summarizes the most recent error.

## Log Format

The script expects each log entry to follow this pattern:

```text
YYYY-MM-DD HH:mm:ss LEVEL message
```

Example:

```text
2026-10-12 10:00:01 INFO Server started
2026-10-12 10:00:10 ERROR Database connection failed
```

## How to Run

### 1. Basic Usage

Provide a log file path as an argument:

```bash
node index.js path/to/log.txt
```

### 2. Severity Filter

Optionally filter the results by log level:

```bash
node index.js path/to/log.txt --level ERROR
```

Valid severity levels are:

- INFO
- WARN
- ERROR

### 3. Example

```bash
node index.js "d:\NodeJs projects\log-analyzer\sample.log"
```

## Output

The script displays:

- Total number of log entries
- Count of INFO, WARN, and ERROR entries
- Error percentage
- Most recent ERROR message

Example output:

```text
Total Entries: 5
INFO: 2
WARN: 1
ERROR: 2
Error Percentage: 40%
Most Recent Error: Request failed
```

## Error Handling

If the log file is missing, unreadable, or contains invalid log entries, the script prints a clear error message and exits with a non-zero status code.
