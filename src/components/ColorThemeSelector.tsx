import { Palette } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuLabel,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu"
import { useTheme } from "@/providers/ThemeProvider"

const colorThemes = [
  { name: 'blue', label: 'Ocean Blue', color: 'bg-blue-600' },
  { name: 'purple', label: 'Royal Purple', color: 'bg-purple-600' },
  { name: 'green', label: 'Forest Green', color: 'bg-green-600' },
  { name: 'orange', label: 'Sunset Orange', color: 'bg-orange-600' },
] as const

export function ColorThemeSelector() {
  const { colorTheme, setColorTheme } = useTheme()

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon" className="h-9 w-9">
          <Palette className="h-4 w-4" />
          <span className="sr-only">Change color theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="bg-glass-card backdrop-blur-glass border-glass">
        <DropdownMenuLabel>Color Theme</DropdownMenuLabel>
        <DropdownMenuSeparator />
        {colorThemes.map((theme) => (
          <DropdownMenuItem 
            key={theme.name}
            onClick={() => setColorTheme(theme.name)}
            className="hover:bg-glass-highlight"
          >
            <div className={`mr-2 h-4 w-4 rounded-full ${theme.color}`} />
            <span className={colorTheme === theme.name ? 'font-medium' : ''}>
              {theme.label}
            </span>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}