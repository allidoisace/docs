---
id: ory-list-identities
title: ory list identities
description: ory list identities List identities
---

<!--
This file is auto-generated.

To improve this file please make your change against the appropriate "./cmd/*.go" file.
-->
## ory list identities

List identities

### Synopsis

List identities (paginated)

```
ory list identities [<page> <per-page>] [flags]
```

### Examples

```
{{ .CommandPath }} 100 1
```

### Options

```
  -h, --help             help for identities
      --project string   The project to use, either project ID or a (partial) slug.
```

### Options inherited from parent commands

```
  -c, --config string   Path to the Ory Network configuration file.
      --format string   Set the output format. One of default, json, yaml, json-pretty and jsonpath. (default "default")
  -q, --quiet           Be quiet with output printing.
  -y, --yes             Confirm all dialogs with yes.
```

### SEE ALSO

* [ory list](ory-list)	 - List resources

