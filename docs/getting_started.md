---
sidebar_position: 2
title: Getting Started
---

## Installation

  - Using IDE built-in plugin system
  
  <kbd>Settings/Preferences</kbd> > <kbd>Plugins</kbd> > <kbd>Marketplace</kbd> > <kbd>Search for "FastShell"</kbd> >
  <kbd>Install Plugin</kbd>


## Usage

Double-click `Ctrl`, enter `fs`, it will list all the Fast Shell commands that have been set, double-click to execute or press Enter after selecting it to execute.

You can also open settings via `Settings/Preferences` > `Tools` > `Fast Shell`.

You can also add a custom directive. Click ![](https://intellij-icons.jetbrains.design/icons/AllIcons/general/settings.svg) in the upper right corner of the **Run Anything** toolbar to open Open Settings to manage your commands.

![add-command](https://user-images.githubusercontent.com/28687074/160279806-2120b040-72f3-4319-8c5c-055cb05fb305.gif)

## Note

:::danger Note
Please do not execute some dangerous commands, such as `rm -rf /`, `rm -rf ~`, etc.

FastShell does not impose any restrictions on the commands that can be executed. 
Therefore, please make sure that your commands will not bring you any loss or data corruption.

**It is also not recommended that you add more dangerous commands to Fast Shell unless 
you are sure that there will be no problems.**
:::

## Runs on windows platform

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