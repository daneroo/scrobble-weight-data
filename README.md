# scrobble-weight-data

Tracking weight data

This repo archives the latest version of my weight data every 20 minutes.

If the repo goes dormant the cron trigger seems to be disabled. (after 60 days)

It is now using [git-auto-commit-action](https://github.com/stefanzweifel/git-auto-commit-action).
It was previously using flat action (which has been unreliable) but we can still use it's visualizations.

You can look at
[the formatted data table here](https://flatgithub.com/daneroo/scrobble-weight-data?filename=formatted.json&filters=&sort=stamp%2Cdesc&stickyColumnName=stamp).

## TODO

- [ ] Commit back changes (instead of flat?)
  - see docs at https://github.com/stefanzweifel/git-auto-commit-action
  - uses: stefanzweifel/git-auto-commit-action@v4

## Testing Actions locally

```bash
act

## equivalent to
deno run -q --allow-read --allow-write --allow-run --allow-net --allow-env --unstable postprocess.js observationdata.json
```

## References

- [flat-data post](https://next.github.com/projects/flat-data)
- [GitHub Action - Flat Data](https://github.com/marketplace/actions/flat-data)
- [Git scraping: track changes over time by scraping to a Git repository](https://simonwillison.net/2020/Oct/9/git-scraping/)
- [Fire Example](https://github.com/simonw/ca-fires-history)
