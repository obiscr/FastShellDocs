---
title: FastShell plugin is coming soon
authors: piercebrands
tags: [Version]
---

## Introduce

Fast Shell supports the management of custom scripts, which can quickly execute shell commands. The supported commands depend on the shell environment used by the current IDE.
Fast Shell has a fairly high degree of freedom. All instructions are completely defined by the user.

Replace `a very long command` with a short `command`. And it's integrated into the IDE's `Run Anything`, so you can easily open it with `Double Ctrl`.

The goal of Fast Shell is to let you get rid of **alias** in `.bashrc` or `.zshrc`.

It doesn't matter if you have defined some commonly used directives in `.bashrc` or `.zshrc`. You can still add it to FastShell to execute.

### Supported Versions

Fast Shell will support all JetBrains platforms from `2020.1` to `2021.3`, and will be supported as soon as possible after the `2022` version is released.

![git-repo](https://user-images.githubusercontent.com/28687074/160279796-574b4bd9-170a-472d-9a4e-fa897866b051.png)


![linux-show](https://user-images.githubusercontent.com/28687074/160279800-9b388cdc-a687-488c-a1eb-17785f750272.gif)

If the instruction is a lot, you can also write it as a script, and then invoke the script through Fast Shell to execute it.

![exec-shell](https://user-images.githubusercontent.com/28687074/160279810-2371b3cd-57f9-487c-888c-27dd49e1fec0.gif)


## Usage

Double-click `Ctrl`, enter `fs`, it will list all the Fast Shell commands that have been set, double-click to execute or press Enter after selecting it to execute.

You can also open settings via `Settings/Preferences` > `Tools` > `Fast Shell`.

You can also add a custom directive. Click ![](https://intellij-icons.jetbrains.design/icons/AllIcons/general/settings.svg) in the upper right corner of the **Run Anything** toolbar to open Open Settings to manage your commands.

![add-command](https://user-images.githubusercontent.com/28687074/160279806-2120b040-72f3-4319-8c5c-055cb05fb305.gif)

## Runs on Windows platform

Most of the shell commands are the same for **Linux** and **Mac**. So basically universal. But on **Windows** things are a little different. Windows has its own separate directives.

E.g:

|  Windows PowerShell  | Linux/macOS  |
|  ----  | ----  |
| ipconfig  | ifconfig |
| Get-Content `filename` -Wait  | tailf / tail -F `filename` |

Therefore, when setting the command, you need to ensure that the current Shell environment supports the set command.

![win-exec](https://user-images.githubusercontent.com/28687074/160281920-fb654a8d-f4fe-49ba-b552-7f00f0c292be.gif)

## Appendix

### Set the current shell environment

`Settings/Preferences` > `Tools` > `Terminal` > `Shell Path`

![bash-env](https://user-images.githubusercontent.com/28687074/160279815-5fa10f79-f6bb-42a7-86e1-22417765dea4.png)
